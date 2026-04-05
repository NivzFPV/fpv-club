// main.js
// Javascript entry point

console.log('FPV Racing Club Website loaded.');

// Google Apps Script Web App URL
// You will replace this string with the URL you get after setting up the Google Apps Script
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbygX4zSPt8O8LRMGIuE7bARJ8GIpH5d6Ng9hct-TWpzbb1c9-ynHJMcuwURKHzdiaOk/exec";

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registration-form');
  const submitBtn = document.getElementById('submit-btn');
  const formMessage = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (WEB_APP_URL === "YOUR_WEB_APP_URL_HERE") {
        alert("שגיאה: יש להגדיר את כתובת ה-Web App בקוד (main.js) לפני השליחה.");
        return;
      }

      // Change button state
      const originalBtnText = submitBtn.innerText;
      submitBtn.innerText = "שולח... (נא להמתין)";
      submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
      submitBtn.disabled = true;

      // Gather form data
      const formData = new FormData(form);

      try {
        const response = await fetch(WEB_APP_URL, {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (result.result === "success") {
          // Show success message
          formMessage.innerText = "הטופס נשלח בהצלחה! ניצור איתך קשר בהקדם.";
          formMessage.classList.remove('hidden', 'bg-red-100', 'text-red-700');
          formMessage.classList.add('bg-green-100', 'text-green-700');
          form.reset();
        } else {
          throw new Error("Server returned an error");
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        formMessage.innerText = "אירעה שגיאה בשליחת הטופס. אנא נסה שוב או צור קשר ישירות.";
        formMessage.classList.remove('hidden', 'bg-green-100', 'text-green-700');
        formMessage.classList.add('bg-red-100', 'text-red-700');
      }

      // Restore button state
      submitBtn.innerText = originalBtnText;
      submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
      submitBtn.disabled = false;
    });
  }
});
