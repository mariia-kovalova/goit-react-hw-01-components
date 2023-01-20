import userData from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from './ProfileModule/Profile/Profile';
import { Statistics } from './StatisticsModule/Statistics/Statistics';
import { FriendsList } from './FriendsModule/FriendsList/FriendsList';
import { TransactionHistory } from './TransactionsHistoryModule/TransactionsHistory/TransactionsHistory';

const { username, tag, location, avatar, stats } = userData;

export const App = () => {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
