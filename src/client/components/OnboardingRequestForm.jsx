import React, { useState } from 'react';

export default function OnboardingRequestForm({ service, onSuccess, onCancel }) {
  const [formData, setFormData] = useState({
    employee_first_name: '',
    employee_last_name: '',
    employee_email: '',
    employee_phone: '',
    department: '',
    job_title: '',
    start_date: '',
    employment_type: '',
    salary: '',
    laptop_required: true,
    office_access_required: true,
    special_requirements: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await service.createRequest(formData);
      onSuccess();
    } catch (err) {
      setError(err.message || 'Failed to create onboarding request');
      console.error('Error creating request:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>New Employee Onboarding Request</h2>
        <button className="close-btn" onClick={onCancel}>×</button>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="onboarding-form">
        <div className="form-section">
          <h3>Employee Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="employee_first_name">First Name *</label>
              <input
                type="text"
                id="employee_first_name"
                name="employee_first_name"
                value={formData.employee_first_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="employee_last_name">Last Name *</label>
              <input
                type="text"
                id="employee_last_name"
                name="employee_last_name"
                value={formData.employee_last_name}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="employee_email">Email Address *</label>
              <input
                type="email"
                id="employee_email"
                name="employee_email"
                value={formData.employee_email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="employee_phone">Phone Number</label>
              <input
                type="tel"
                id="employee_phone"
                name="employee_phone"
                value={formData.employee_phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Position Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="department">Department *</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Department</option>
                <option value="hr">Human Resources</option>
                <option value="it">Information Technology</option>
                <option value="finance">Finance</option>
                <option value="marketing">Marketing</option>
                <option value="operations">Operations</option>
                <option value="legal">Legal</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="job_title">Job Title *</label>
              <input
                type="text"
                id="job_title"
                name="job_title"
                value={formData.job_title}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="employment_type">Employment Type *</label>
              <select
                id="employment_type"
                name="employment_type"
                value={formData.employment_type}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Employment Type</option>
                <option value="full_time">Full Time</option>
                <option value="part_time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="intern">Intern</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="start_date">Expected Start Date *</label>
              <input
                type="date"
                id="start_date"
                name="start_date"
                value={formData.start_date}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="salary">Annual Salary</label>
            <input
              type="text"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              placeholder="e.g., $65,000"
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Requirements</h3>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="laptop_required"
                checked={formData.laptop_required}
                onChange={handleInputChange}
              />
              Laptop Required
            </label>
            <label>
              <input
                type="checkbox"
                name="office_access_required"
                checked={formData.office_access_required}
                onChange={handleInputChange}
              />
              Office Access Required
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="special_requirements">Special Requirements</label>
            <textarea
              id="special_requirements"
              name="special_requirements"
              value={formData.special_requirements}
              onChange={handleInputChange}
              rows="3"
              placeholder="Any special requirements or notes..."
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Creating...' : 'Create Request'}
          </button>
        </div>
      </form>
    </div>
  );
}