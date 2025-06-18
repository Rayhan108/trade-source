'use client';

import { useState } from 'react';

export default function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    projectUpdates: {
      inApp: true,
      email: true,
      sms: false,
    },
    message: {
      inApp: true,
      email: false,
      sms: true,
    },
  });

  const handleToggle = (section, type) => {
    setNotifications((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [type]: !prev[section][type],
      },
    }));
  };

  const renderOption = (checked, label) => (
    <div className="flex items-center gap-1 cursor-pointer">
      <span
        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
          checked ? 'border-green-500' : 'border-gray-400'
        }`}
      >
        {checked && (
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        )}
      </span>
      <span className="text-sm">{label}</span>
    </div>
  );

  return (
    <div className="bg-white p-6 min-h-screen rounded-lg border w-full max-w-7xl mx-auto  h-[450px]">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notifications</h2>
      <div className="border-b mb-6"></div>

      {/* Notification options */}
      <div className="space-y-6">
        {/* Project Updates */}
        <div className="flex xl:mt-48 items-center justify-between">
          <span className="font-medium text-gray-700">Project Updates</span>
          <div className="flex gap-6">
            <div onClick={() => handleToggle('projectUpdates', 'inApp')}>
              {renderOption(notifications.projectUpdates.inApp, 'In-app')}
            </div>
            <div onClick={() => handleToggle('projectUpdates', 'email')}>
              {renderOption(notifications.projectUpdates.email, 'Email')}
            </div>
            <div onClick={() => handleToggle('projectUpdates', 'sms')}>
              {renderOption(notifications.projectUpdates.sms, 'SMS')}
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-700">Message</span>
          <div className="flex gap-6">
            <div onClick={() => handleToggle('message', 'inApp')}>
              {renderOption(notifications.message.inApp, 'In-app')}
            </div>
            <div onClick={() => handleToggle('message', 'email')}>
              {renderOption(notifications.message.email, 'Email')}
            </div>
            <div onClick={() => handleToggle('message', 'sms')}>
              {renderOption(notifications.message.sms, 'Email')}
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-10 w-full">
        <button className="w-1/2 px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
          Cancel
        </button>
        <button className="w-1/2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Update
        </button>
      </div>
    </div>
  );
}
