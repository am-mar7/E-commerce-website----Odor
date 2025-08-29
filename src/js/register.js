const defaultUsers = [
    { email: "ammar@gmail.com", password: "1234" },
    { email: "test@gmail.com", password: "5678" }
  ];

function getStoredUsers() {
    try {
      return JSON.parse(localStorage.getItem("users")) || [];
    } catch {
      return [];
    }
  }

function saveStoredUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}
function setCurrentUser(currUser){
    localStorage.setItem('currentUser' , JSON.stringify(currUser))
}
function getAllUsers() {
    const storedUsers = getStoredUsers()
    return [...defaultUsers, ...storedUsers]
}

if(window.location.pathname.includes('signup.html')){
    document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
        Swal.fire({
            icon: "error",
            title: "passwords doesn't match",
            text: "Something went wrong!",
          });
        return;
    }

    const allUsers = getAllUsers();
    if (allUsers.find(u => u.email === email)) {
        Swal.fire({
          icon: "error",
          title: "this email is already in use",
          text: "Something went wrong!",
        });
        return;
    }    
    const newUser = { email, password };
    const storedUsers = getStoredUsers();
    storedUsers.push(newUser);
    saveStoredUsers(storedUsers);
    setCurrentUser(newUser);
    Swal.fire({
        title: "Signup successful!",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('cartItems')
          window.location.href = '../pages/home.html';
        }
      });
    });
}
if (window.location.pathname.includes('login.html')) {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      const allUsers = getAllUsers();
      console.log(allUsers, email, password);
  
      const foundUser = allUsers.find(u => u.email === email && u.password === password);
  
      if (foundUser) {
        setCurrentUser(foundUser);
        Swal.fire({
          title: "Login successful!",
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem('cartItems')
            window.location.href = '../pages/home.html';
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid email or password",
          text: "Something went wrong!",
        });
        return;
      }
    });
  }
  