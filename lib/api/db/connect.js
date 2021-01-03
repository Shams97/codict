import mongoose from "mongoose";

export default function connectAtlas({
  admin = false,
  user = false,
  participant = false,
}) {
  /**
   * Setup connection type to grant the correct priviliges
   */
  let credentials;

  if (admin) {
    credentials = {
      username: process.env.ADMIN_NAME,
      pwd: process.env.ADMIN_PWD,
    };
  } else if (user) {
    credentials = {
      username: process.env.REGULAR_USER_NAME,
      pwd: process.env.REGULAR_USER_PWD,
    };
  } else if (participant) {
    credentials = {
      username: process.env.PARTICIPANT_NAME,
      pwd: process.env.PARTICIPANT_PWD,
    };
  }

  const { username, pwd } = credentials;

  const url = `mongodb+srv://${username}:${pwd}@sandbox.rkgga.mongodb.net/codict?retryWrites=true&w=majority`;

  /**
   * setup mongoose connection events (events take place AFTER initial connection)
   */

  /**
   * Fire connection if there is no connection open
   */
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
