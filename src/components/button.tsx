import { useSession } from "next-auth/react";

export default function Button() {
  const session = useSession();

  if (session.data) {
    return <button>Show Profile</button>;
  } else {
    return <button>Button Component</button>;
  }
}
