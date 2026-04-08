import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import onboardingDashboard from '../../client/index.html'

export const employee_onboarding_dashboard = UiPage({
    $id: Now.ID['employee_onboarding_dashboard'],
    endpoint: 'x_1902321_employee_onboarding_dashboard.do',
    description: 'Employee onboarding workflow management dashboard with React interface for tracking and managing employee onboarding requests through various approval stages',
    category: 'general',
    html: onboardingDashboard,
    direct: true
})