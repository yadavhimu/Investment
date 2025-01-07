const NavbarInside = ({ email }) => {

    const userCrypto = { email: email};
  
    return (
      <div className="navbar">
        <p>Welcome, {userCrypto.email}</p>
      </div>
    );
  }
export default NavbarInside