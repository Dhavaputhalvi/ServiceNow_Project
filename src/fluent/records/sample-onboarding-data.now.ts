import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Sample onboarding request for a new IT employee
export const sampleOnboardingRequest1 = Record({
    $id: Now.ID['sample_onboarding_1'],
    table: 'x_1902321_employee_onboarding_request',
    data: {
        employee_first_name: 'Sarah',
        employee_last_name: 'Johnson',
        employee_email: 'sarah.johnson@company.com',
        employee_phone: '+1-555-0123',
        department: 'it',
        job_title: 'Senior Software Engineer',
        manager: '6816f79cc0a8016401c5a33be04be441', // System Administrator
        start_date: '2024-02-15',
        employment_type: 'full_time',
        salary: '$85,000',
        onboarding_status: 'pending_manager_approval',
        laptop_required: true,
        office_access_required: true,
        special_requirements: 'Dual monitor setup required, access to development servers',
        short_description: 'New Employee Onboarding: Sarah Johnson'
    },
    $meta: {
        installMethod: 'demo'
    }
})

// Sample onboarding request for a marketing employee
export const sampleOnboardingRequest2 = Record({
    $id: Now.ID['sample_onboarding_2'],
    table: 'x_1902321_employee_onboarding_request',
    data: {
        employee_first_name: 'Michael',
        employee_last_name: 'Chen',
        employee_email: 'michael.chen@company.com',
        employee_phone: '+1-555-0456',
        department: 'marketing',
        job_title: 'Digital Marketing Specialist',
        manager: '6816f79cc0a8016401c5a33be04be441', // System Administrator
        start_date: '2024-02-20',
        employment_type: 'full_time',
        salary: '$55,000',
        onboarding_status: 'pending_hr_review',
        manager_approved: true,
        laptop_required: true,
        office_access_required: false,
        special_requirements: 'Remote work setup, access to marketing automation tools',
        short_description: 'New Employee Onboarding: Michael Chen'
    },
    $meta: {
        installMethod: 'demo'
    }
})

// Sample onboarding request for an HR intern
export const sampleOnboardingRequest3 = Record({
    $id: Now.ID['sample_onboarding_3'],
    table: 'x_1902321_employee_onboarding_request',
    data: {
        employee_first_name: 'Emily',
        employee_last_name: 'Rodriguez',
        employee_email: 'emily.rodriguez@company.com',
        employee_phone: '+1-555-0789',
        department: 'hr',
        job_title: 'HR Intern',
        manager: '6816f79cc0a8016401c5a33be04be441', // System Administrator
        start_date: '2024-02-25',
        employment_type: 'intern',
        onboarding_status: 'training_assigned',
        manager_approved: true,
        hr_approved: true,
        it_setup_complete: true,
        laptop_required: false,
        office_access_required: true,
        special_requirements: 'Orientation materials, access to HRIS system for training',
        short_description: 'New Employee Onboarding: Emily Rodriguez'
    },
    $meta: {
        installMethod: 'demo'
    }
})

// Sample completed onboarding request
export const sampleOnboardingRequest4 = Record({
    $id: Now.ID['sample_onboarding_4'],
    table: 'x_1902321_employee_onboarding_request',
    data: {
        employee_first_name: 'David',
        employee_last_name: 'Williams',
        employee_email: 'david.williams@company.com',
        employee_phone: '+1-555-0321',
        department: 'finance',
        job_title: 'Financial Analyst',
        manager: '6816f79cc0a8016401c5a33be04be441', // System Administrator
        start_date: '2024-01-15',
        employment_type: 'full_time',
        salary: '$65,000',
        onboarding_status: 'completed',
        manager_approved: true,
        hr_approved: true,
        it_setup_complete: true,
        training_complete: true,
        laptop_required: true,
        office_access_required: true,
        special_requirements: 'Access to financial systems, company credit card',
        short_description: 'New Employee Onboarding: David Williams'
    },
    $meta: {
        installMethod: 'demo'
    }
})