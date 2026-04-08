import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'
import { hr_specialist, hiring_manager, it_provisioning, employee_admin } from '../roles/employee-roles.now.ts'

// Simplified ACL for reading employee onboarding requests - allow everyone for testing
export const readOnboardingRequests = Acl({
    $id: Now.ID['read_onboarding_requests'],
    type: 'record',
    table: 'x_1902321_employee_onboarding_request',
    operation: 'read',
    roles: [hr_specialist, hiring_manager, it_provisioning, employee_admin],
    active: true,
    admin_overrides: true,
    description: 'Allow HR, managers, and IT staff to read employee onboarding requests'
})

// Simplified ACL for creating employee onboarding requests
export const createOnboardingRequests = Acl({
    $id: Now.ID['create_onboarding_requests'],
    type: 'record',
    table: 'x_1902321_employee_onboarding_request',
    operation: 'create',
    roles: [hr_specialist, hiring_manager, employee_admin],
    active: true,
    admin_overrides: true,
    description: 'Allow HR specialists and managers to create employee onboarding requests'
})

// Simplified ACL for updating employee onboarding requests - allow all authorized roles
export const updateOnboardingRequests = Acl({
    $id: Now.ID['update_onboarding_requests'],
    type: 'record',
    table: 'x_1902321_employee_onboarding_request',
    operation: 'write',
    roles: [hr_specialist, hiring_manager, it_provisioning, employee_admin],
    active: true,
    admin_overrides: true,
    description: 'Allow authorized roles to update employee onboarding requests'
})

// Simplified field-level ACLs - less restrictive for testing

// Manager approval field - allow managers and HR to update
export const managerApprovalAccess = Acl({
    $id: Now.ID['manager_approval_access'],
    type: 'record',
    table: 'x_1902321_employee_onboarding_request',
    field: 'manager_approved',
    operation: 'write',
    roles: [hiring_manager, hr_specialist, employee_admin],
    active: true,
    admin_overrides: true,
    description: 'Allow managers, HR, or admins to set manager approval'
})

// HR approval field - allow HR
export const hrApprovalAccess = Acl({
    $id: Now.ID['hr_approval_access'],
    type: 'record',
    table: 'x_1902321_employee_onboarding_request',
    field: 'hr_approved',
    operation: 'write',
    roles: [hr_specialist, employee_admin],
    active: true,
    admin_overrides: true,
    description: 'Allow HR specialists and admins to set HR approval'
})

// IT setup fields - allow IT
export const itSetupAccess = Acl({
    $id: Now.ID['it_setup_access'],
    type: 'record',
    table: 'x_1902321_employee_onboarding_request',
    field: 'it_setup_complete',
    operation: 'write',
    roles: [it_provisioning, employee_admin],
    active: true,
    admin_overrides: true,
    description: 'Allow IT provisioning staff and admins to mark IT setup as complete'
})

// Training completion field - allow all roles for testing
export const trainingCompletionAccess = Acl({
    $id: Now.ID['training_completion_access'],
    type: 'record',
    table: 'x_1902321_employee_onboarding_request',
    field: 'training_complete',
    operation: 'write',
    roles: [hr_specialist, hiring_manager, it_provisioning, employee_admin],
    active: true,
    admin_overrides: true,
    description: 'Allow all authorized roles to mark training as complete'
})