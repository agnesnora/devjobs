import { FC } from "react";
import { useParams } from "react-router-dom";

interface RouteParams {
  id: string;
  [key: string]: string | undefined; // Adjusted to allow number type
}
interface JobDetailProps {}

export const JobDetailPage: FC<JobDetailProps> = () => {
  const params = useParams<RouteParams>();
  console.log(params.id);
  return <div>I am the job detail page</div>;
};
