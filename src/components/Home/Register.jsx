export const Register = () => {
  return (
    <>
      <form style={{ display: 'grid', padding: '40px' }}>
        <label style={{ marginBottom: '5px' }}>
          Username
          <input type="text" />
        </label>
        <label style={{ marginBottom: '5px' }}>
          Password
          <input type="password" />
        </label>
        <label style={{ marginBottom: '15px' }}>
          Birthday
          <input type="date" style={{ marginLeft: '5px' }} />
        </label>
        <button type="submit" style={{ width: '150px' }}>
          Submit
        </button>
      </form>
    </>
  );
};
