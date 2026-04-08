import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { validateEmployeeData, sendWorkflowNotifications } from '../../server/onboarding-automation.js'

// Simplified validation rule that won't block updates
export const validateDataRule = BusinessRule({
    $id: Now.ID['validate_employee_data_rule'],
    name: 'Employee Data Validation',
    table: 'x_1902321_employee_onboarding_request',
    when: 'before',
    action: ['insert'],  // Only on insert, not update
    script: validateEmployeeData,
    order: 50,
    active: true,
    description: 'Validates employee data on creation only'
})

// Business rule to send notifications after status changes
export const notificationRule = BusinessRule({
    $id: Now.ID['onboarding_notification_rule'],
    name: 'Employee Onboarding Notifications',
    table: 'x_1902321_employee_onboarding_request',
    when: 'after',
    action: ['insert', 'update'],
    script: sendWorkflowNotifications,
    order: 200,
    active: true,
    description: 'Sends notifications to relevant stakeholders when onboarding status changes'
})

// Business rule for manager approval - triggers workflow
export const managerApprovalWorkflow = BusinessRule({
    $id: Now.ID['manager_approval_workflow'],
    name: 'Manager Approval Workflow',
    table: 'x_1902321_employee_onboarding_request',
    when: 'before',
    action: ['update'],
    condition: 'current.manager_approved.changes() && current.manager_approved == true',
    script: `
        // Manager approved - move to HR review
        current.setValue('onboarding_status', 'pending_hr_review');
        current.setValue('state', '1'); // In Progress
        gs.addInfoMessage('Manager approved! Moving to HR review stage');
    `,
    order: 100,
    active: true,
    description: 'Moves request to HR review when manager approves'
})

// Business rule for HR approval - triggers workflow
export const hrApprovalWorkflow = BusinessRule({
    $id: Now.ID['hr_approval_workflow'],
    name: 'HR Approval Workflow',
    table: 'x_1902321_employee_onboarding_request',
    when: 'before',
    action: ['update'],
    condition: 'current.hr_approved.changes() && current.hr_approved == true',
    script: `
        // HR approved - move to IT provisioning
        current.setValue('onboarding_status', 'pending_it_provisioning');
        current.setValue('state', '1'); // In Progress
        gs.addInfoMessage('HR approved! Moving to IT provisioning stage');
    `,
    order: 110,
    active: true,
    description: 'Moves request to IT provisioning when HR approves'
})

// Business rule for IT completion - triggers workflow
export const itCompletionWorkflow = BusinessRule({
    $id: Now.ID['it_completion_workflow'],
    name: 'IT Completion Workflow',
    table: 'x_1902321_employee_onboarding_request',
    when: 'before',
    action: ['update'],
    condition: 'current.it_setup_complete.changes() && current.it_setup_complete == true',
    script: `
        // IT completed - move to training
        current.setValue('onboarding_status', 'training_assigned');
        current.setValue('state', '1'); // In Progress
        gs.addInfoMessage('IT setup completed! Moving to training assignment stage');
    `,
    order: 120,
    active: true,
    description: 'Moves request to training when IT setup is complete'
})

// Business rule for training completion - triggers workflow
export const trainingCompletionWorkflow = BusinessRule({
    $id: Now.ID['training_completion_workflow'],
    name: 'Training Completion Workflow',
    table: 'x_1902321_employee_onboarding_request',
    when: 'before',
    action: ['update'],
    condition: 'current.training_complete.changes() && current.training_complete == true',
    script: `
        // Training completed - mark as completed
        current.setValue('onboarding_status', 'completed');
        current.setValue('state', '3'); // Closed Complete
        
        var completionDate = new GlideDateTime().getDisplayValue();
        current.setValue('closed_at', completionDate);
        
        gs.addInfoMessage('Training completed! Employee onboarding process is now complete');
    `,
    order: 130,
    active: true,
    description: 'Completes the onboarding process when training is finished'
})

// Simplified auto-populate rule
export const autoPopulateRule = BusinessRule({
    $id: Now.ID['auto_populate_fields_rule'],
    name: 'Auto-populate Employee Record Fields',
    table: 'x_1902321_employee_onboarding_request',
    when: 'before',
    action: ['insert'],
    script: `
        try {
            // Set default values for new onboarding requests
            var firstName = current.getValue('employee_first_name') || '';
            var lastName = current.getValue('employee_last_name') || '';
            if (firstName || lastName) {
                current.setValue('short_description', 'New Employee Onboarding: ' + firstName + ' ' + lastName);
            }
        } catch (e) {
            gs.warn('Auto-populate warning: ' + e.message);
        }
    `,
    order: 10,
    active: true,
    description: 'Automatically populates default field values when creating new employee onboarding requests'
})