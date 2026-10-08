export const sendInquiry = async (formData) => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Inquiry Data:', formData);
      resolve({ success: true });
    }, 1200);
  });
};
