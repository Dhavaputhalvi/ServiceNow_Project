import '@servicenow/sdk/global'
import { Role } from '@servicenow/sdk/core'

export const hr_specialist = Role({
    name: 'x_1902321_employee.hr_specialist',
    description: 'HR Specialists who can review and approve employee onboarding requests and manage employee data',
    can_delegate: true,
    grantable: true,
    elevated_privilege: false
})

export const hiring_manager = Role({
    name: 'x_1902321_employee.hiring_manager',
    description: 'Managers who can approve employee onboarding requests for their department',
    can_delegate: true,
    grantable: true,
    elevated_privilege: false
})

export const it_provisioning = Role({
    name: 'x_1902321_employee.it_provisioning',
    description: 'IT staff responsible for setting up accounts, equipment, and access for new employees',
    can_delegate: true,
    grantable: true,
    elevated_privilege: false
})

export const employee_admin = Role({
    name: 'x_1902321_employee.employee_admin',
    description: 'Employee Data administrators with full access to the employee automation system',
    contains_roles: [hr_specialist, hiring_manager, it_provisioning],
    scoped_admin: true,
    can_delegate: true,
    grantable: true,
    elevated_privilege: false
})