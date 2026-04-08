import { gs, GlideDateTime } from '@servicenow/glide'

/**
 * Simple validation - don't abort actions, just log warnings
 */
export function validateEmployeeData(current) {
    try {
        // Only validate on insert, not update to avoid blocking workflow actions
        if (current.isNewRecord()) {
            const email = current.getValue('employee_email')
            if (email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!emailRegex.test(email)) {
                    gs.addErrorMessage('Please enter a valid email address')
                    current.setAbortAction(true)
                    return
                }
            }
        }
        
        // Auto-set priority based on department (safe operation)
        const department = current.getValue('department')
        if (department === 'it' || department === 'hr') {
            current.setValue('priority', '2')
        } else {
            current.setValue('priority', '3')
        }
        
    } catch (error) {
        gs.warn('Employee data validation warning: ' + error.message)
        // Don't abort on validation errors during updates
    }
}

/**
 * Sends notifications at key workflow stages
 */
export function sendWorkflowNotifications(current, previous) {
    try {
        const currentStatus = current.getValue('onboarding_status')
        const employeeName = `${current.getValue('employee_first_name')} ${current.getValue('employee_last_name')}`
        
        // Only send notifications if status actually changed
        const previousStatus = previous ? previous.getValue('onboarding_status') : ''
        
        if (currentStatus !== previousStatus) {
            if (currentStatus === 'pending_manager_approval') {
                gs.addInfoMessage(`Notification: Manager approval needed for ${employeeName}`)
            }
            
            if (currentStatus === 'pending_hr_review') {
                gs.addInfoMessage(`Notification: HR review needed for ${employeeName}`)
            }
            
            if (currentStatus === 'pending_it_provisioning') {
                gs.addInfoMessage(`Notification: IT provisioning needed for ${employeeName}`)
            }
            
            if (currentStatus === 'completed') {
                gs.addInfoMessage(`Notification: Onboarding completed for ${employeeName}`)
            }
        }
        
    } catch (error) {
        gs.warn('Notification warning: ' + error.message)
    }
}