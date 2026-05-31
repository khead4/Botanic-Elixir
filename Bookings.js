document.getElementById('toStep4').addEventListener('click', () => {
  if(!selectedExperience){
    alert('Select an experience first.');
    return;
  }

  const date = document.getElementById('date').value || '(date not set)';
  const time = document.getElementById('time').value || '(time not set)';
  const duration = document.getElementById('duration').value;
  const guests = document.getElementById('guests').value;

  const fullName = document.getElementById('name').value || '(name not set)';
  const email = document.getElementById('email').value || '(email not set)';
  const phone = document.getElementById('phone').value || '';

  // Check for overlapping times
  const isOverlap = bookings.some(booking => {
    return booking.fullName === fullName && booking.date === date && booking.time === time;
  });

  if (isOverlap) {
    alert('Booking time overlaps with an existing booking. Please choose a different time.');
    return;
  }

  // Build the booking object
  const booking = {
    id: makeId(),
    createdAt: new Date().toISOString(),
    mood: selectedExperience.type,
    experience: selectedExperience.name,
    date, time, duration, guests,
    space: selectedSpace,
    fullName, email, phone
  };

  // Store the booking in the bookings array
  bookings.push(booking);
  saveBookings();

  // Go to booked page showing THIS booking
  window.location.href = `booked.html?id=${encodeURIComponent(booking.id)}`;
});


<script>
  function showSubscribePopup(){
    document.getElementById("subscribePopup").classList.add("is-on");
  }

  function closeSubscribePopup(){
    document.getElementById("subscribePopup").classList.remove("is-on");
  }
</script>