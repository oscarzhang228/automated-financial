export default function Landing() {
  return (
    <div className ="landing-page">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <br />
          <input type = "text" name = "firstname" ide = "first" onChange={handleChange}value={formData.firstName} required maxLength={20}/>
          <br />
        </div>
        <div>
          <label htmlFor="lastname">First Name:</label>
          <br />
          <input type = "text" name = "lastname" ide = "last" onChange={handleChange}value={formData.lastName} required maxLength={20}/>
          <br />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input type = "email" name = "email" ide = "email" onChange={handleChange}value={formData.email} required maxLength={40}/>
          <br />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input type = "password" name = "password" ide = "password" onChange={handleChange}value={formData.password} required maxLength={15}/>
          <br />
        </div>

        <button>Sign Up</button>

      </form>
    </div>




  );
}
