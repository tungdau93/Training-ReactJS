const handleDateOfBirth = (value) => {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  const selectedYYYY = Number(value.slice(0, 4));
  const selectedMM = Number(value.slice(5, 7));
  const selectedDD = Number(value.slice(8, 10));
  
};