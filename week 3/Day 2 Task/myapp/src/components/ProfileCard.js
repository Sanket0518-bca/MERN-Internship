function ProfileCard(props) {
  return (
    <div className="profile-card">
      <img
        src={props.image}
        alt={props.name}
        className="profile-image"
      />

      <h3>{props.name}</h3>
      <p>{props.role}</p>
    </div>
  );
}

export default ProfileCard;
