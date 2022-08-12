const Profile = () => {
  return (
    <div>
      <main className="profile-card">
        <div className="profile-card-header">Welcome userNAME!</div>

        <body>
          <form>
            <label htmlFor="issueType">Select Subject</label>
            <br></br>
            <select id="issueType">
              <option value="Math">Math</option>
              <option value="History">History</option>
              <option value="Science">Science </option>
              <option value="Literature">Literature </option>
              <option value="Art">Art </option>
            </select>
          </form>
        </body>
      </main>
    </div>
  );
};

export default Profile;
