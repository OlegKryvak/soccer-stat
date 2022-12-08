import { LeagueItem, Pagination } from "../../components";
import { useAxios } from "../../hooks";
import { Competition, GetUsersResponse } from "../../types";

type Props = {};

const Leagues = (props: Props) => {
  const [loading, data, error, request] = useAxios<GetUsersResponse>('competitions');
  console.log(data);

  if (loading) return <p>Loading ....</p>;

  if (error !== "") return <p>{error}</p>;

  if (!data) return <p>Data was null</p>;

  return (
    <div>
      <Pagination data={data?.competitions} itemsPerPage={9} totalItemsCount={data?.count}/>
      {/* {
        data?.competitions.map((league: Competition) => <LeagueItem league={league} />)
      } */}
        
    </div>
  );
};
export default Leagues;
