export class OnboardingService {
  constructor() {
    this.tableName = 'x_1902321_employee_onboarding_request';
    this.baseUrl = `/api/now/table/${this.tableName}`;
  }

  async getAllRequests() {
    try {
      const params = new URLSearchParams({
        sysparm_display_value: 'all',
        sysparm_limit: '100',
        sysparm_offset: '0'
      });

      const response = await fetch(`${this.baseUrl}?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'X-UserToken': window.g_ck
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Get requests error response:', errorText);
        throw new Error(`HTTP ${response.status}: Failed to fetch requests`);
      }

      const data = await response.json();
      return data.result || [];
    } catch (error) {
      console.error('Error fetching onboarding requests:', error);
      throw error;
    }
  }

  async getRequestsByStatus(status) {
    try {
      const params = new URLSearchParams({
        sysparm_display_value: 'all',
        sysparm_query: `onboarding_status=${status}`,
        sysparm_limit: '100'
      });

      const response = await fetch(`${this.baseUrl}?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'X-UserToken': window.g_ck
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Failed to fetch requests by status`);
      }

      const data = await response.json();
      return data.result || [];
    } catch (error) {
      console.error('Error fetching requests by status:', error);
      throw error;
    }
  }

  async createRequest(requestData) {
    try {
      console.log('Creating request with data:', requestData);
      
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-UserToken': window.g_ck
        },
        body: JSON.stringify(requestData)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Create request error response:', errorText);
        try {
          const errorData = JSON.parse(errorText);
          throw new Error(errorData.error?.message || errorData.error?.detail || `HTTP ${response.status}: Create failed`);
        } catch (parseError) {
          throw new Error(`HTTP ${response.status}: Create request failed`);
        }
      }

      const data = await response.json();
      console.log('Create request success:', data);
      return data.result;
    } catch (error) {
      console.error('Error creating onboarding request:', error);
      throw error;
    }
  }

  async updateRequest(sysId, updateData) {
    try {
      console.log(`Updating request ${sysId} with data:`, updateData);
      
      const response = await fetch(`${this.baseUrl}/${sysId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-UserToken': window.g_ck
        },
        body: JSON.stringify(updateData)
      });

      console.log('Update response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Update request error response:', errorText);
        
        try {
          const errorData = JSON.parse(errorText);
          const errorMessage = errorData.error?.message || errorData.error?.detail || `HTTP ${response.status}: Update failed`;
          throw new Error(errorMessage);
        } catch (parseError) {
          throw new Error(`HTTP ${response.status}: Update request failed - ${response.statusText}`);
        }
      }

      const data = await response.json();
      console.log('Update request success:', data);
      return data.result;
    } catch (error) {
      console.error('Error updating onboarding request:', error);
      throw error;
    }
  }

  async deleteRequest(sysId) {
    try {
      const response = await fetch(`${this.baseUrl}/${sysId}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'X-UserToken': window.g_ck
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Delete request error response:', errorText);
        throw new Error(`HTTP ${response.status}: Delete failed`);
      }

      return response.ok;
    } catch (error) {
      console.error('Error deleting onboarding request:', error);
      throw error;
    }
  }

  // Simplified action methods with better error handling
  async approveManagerRequest(sysId) {
    console.log('Approving manager request for:', sysId);
    return this.updateRequest(sysId, { 
      manager_approved: 'true'
    });
  }

  async approveHRRequest(sysId) {
    console.log('Approving HR request for:', sysId);
    return this.updateRequest(sysId, { 
      hr_approved: 'true'
    });
  }

  async completeITSetup(sysId) {
    console.log('Completing IT setup for:', sysId);
    return this.updateRequest(sysId, { 
      it_setup_complete: 'true'
    });
  }

  async completeTraining(sysId) {
    console.log('Completing training for:', sysId);
    return this.updateRequest(sysId, { 
      training_complete: 'true'
    });
  }

  async submitForApproval(sysId) {
    console.log('Submitting for approval:', sysId);
    return this.updateRequest(sysId, { 
      onboarding_status: 'pending_manager_approval' 
    });
  }
}