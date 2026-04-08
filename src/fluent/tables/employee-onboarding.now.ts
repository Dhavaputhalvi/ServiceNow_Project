import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn, DateColumn, BooleanColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_1902321_employee_onboarding_request = Table({
    name: 'x_1902321_employee_onboarding_request',
    label: 'Employee Onboarding Request',
    extends: 'task',
    schema: {
        employee_first_name: StringColumn({ 
            label: 'First Name', 
            mandatory: true,
            maxLength: 100 
        }),
        employee_last_name: StringColumn({ 
            label: 'Last Name', 
            mandatory: true,
            maxLength: 100 
        }),
        employee_email: StringColumn({ 
            label: 'Email Address', 
            mandatory: true,
            maxLength: 200 
        }),
        employee_phone: StringColumn({ 
            label: 'Phone Number',
            maxLength: 50 
        }),
        department: StringColumn({
            label: 'Department',
            mandatory: true,
            choices: {
                hr: { label: 'Human Resources', sequence: 0 },
                it: { label: 'Information Technology', sequence: 1 },
                finance: { label: 'Finance', sequence: 2 },
                marketing: { label: 'Marketing', sequence: 3 },
                operations: { label: 'Operations', sequence: 4 },
                legal: { label: 'Legal', sequence: 5 }
            },
            dropdown: 'dropdown_with_none'
        }),
        job_title: StringColumn({ 
            label: 'Job Title', 
            mandatory: true,
            maxLength: 150 
        }),
        manager: ReferenceColumn({ 
            label: 'Reporting Manager', 
            referenceTable: 'sys_user',
            mandatory: true 
        }),
        start_date: DateColumn({ 
            label: 'Expected Start Date', 
            mandatory: true 
        }),
        employment_type: ChoiceColumn({
            label: 'Employment Type',
            choices: {
                full_time: { label: 'Full Time', sequence: 0 },
                part_time: { label: 'Part Time', sequence: 1 },
                contract: { label: 'Contract', sequence: 2 },
                intern: { label: 'Intern', sequence: 3 }
            },
            dropdown: 'dropdown_with_none',
            mandatory: true
        }),
        salary: StringColumn({ 
            label: 'Annual Salary',
            maxLength: 50 
        }),
        onboarding_status: ChoiceColumn({
            label: 'Onboarding Status',
            choices: {
                draft: { label: 'Draft', sequence: 0 },
                pending_manager_approval: { label: 'Pending Manager Approval', sequence: 1 },
                pending_hr_review: { label: 'Pending HR Review', sequence: 2 },
                pending_it_provisioning: { label: 'Pending IT Provisioning', sequence: 3 },
                training_assigned: { label: 'Training Assigned', sequence: 4 },
                completed: { label: 'Completed', sequence: 5 },
                cancelled: { label: 'Cancelled', sequence: 6 }
            },
            dropdown: 'dropdown_without_none',
            default: 'draft'
        }),
        hr_approved: BooleanColumn({ 
            label: 'HR Approved',
            default: false 
        }),
        manager_approved: BooleanColumn({ 
            label: 'Manager Approved',
            default: false 
        }),
        it_setup_complete: BooleanColumn({ 
            label: 'IT Setup Complete',
            default: false 
        }),
        training_complete: BooleanColumn({ 
            label: 'Training Complete',
            default: false 
        }),
        laptop_required: BooleanColumn({ 
            label: 'Laptop Required',
            default: true 
        }),
        office_access_required: BooleanColumn({ 
            label: 'Office Access Required',
            default: true 
        }),
        special_requirements: StringColumn({ 
            label: 'Special Requirements',
            maxLength: 1000 
        })
    },
    display: 'employee_first_name',
    extensible: false,
    accessible_from: 'package_private',
    actions: ['create', 'read', 'update', 'delete'],
    allow_web_service_access: true,
    caller_access: 'tracking'
})