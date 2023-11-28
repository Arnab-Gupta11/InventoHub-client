import DashContainer from "../../../../components/shared/DashContainer/DashContainer";
import Loader from "../../../../components/shared/Loader/Loader";
import useUsers from "../../../../hooks/useUsers";
import SummaryCard from "./SummaryCard";
import UsersCard from "./UsersCard";

const Users = () => {
  const [result, isLoading] = useUsers();
  if (isLoading === true) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div>
        {result.length > 0 ? (
          <div className="py-5 px-8">
            <SummaryCard></SummaryCard>
            <DashContainer>
              <h2 className="text-xl md:text-3xl text-[#1B2850] font-semibold ml-1 mb-5">Total {result.length} Users</h2>
              <div>
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr className="text-base text-[#1B2850] font-normal bg-[#FAFBFE] border-none rounded-md">
                        <th>User Name</th>
                        <th> User Email</th>
                        <th> Shop Name</th>
                        <th> Role</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result?.map((user) => (
                        <UsersCard key={user._id} user={user}></UsersCard>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </DashContainer>
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
            <div className="text-center">
              <h1 className="text-3xl text-[#1B2850] font-extrabold mt-4">No Users Available</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
