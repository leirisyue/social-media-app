import React, { Suspense } from 'react'
import FriendRequests from './FriendRequests';
import Birthdays from './Birthdays';
import Ad from '../Ad';
import UserInfoCard from '../user/UserInfoCard';
import UserMediaCard from '../user/UserMediaCard';
import { User } from '@prisma/client';

const RightMenu = ({ user }: { user?: User }) => {
  console.log(" RightMenu ~ user:", user);

  return (
    <>
      <div className="flex flex-col gap-6">
        {user ? (
          <>
            <Suspense fallback="loading...">
              <UserInfoCard user={user} />
            </Suspense>
            <Suspense fallback="loading...">
              <UserMediaCard user={user} />
            </Suspense>
          </>
        ) : null}
        <FriendRequests />
        <Birthdays />
        <Ad size="md" />
      </div>
    </>
  );
};

export default RightMenu