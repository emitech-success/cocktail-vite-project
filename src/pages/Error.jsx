import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from '../assets/not-found.svg';

const Error = () => {
  const error =useRouteError()
  console.log(error);
  
  if (error.status === 404) {
    return <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>ohhh</h3>
        <p>We can't seem to find the page you are looking for</p>
        <Link to={'/'}>Back Home</Link>
      </div>
    </Wrapper>
  }
  return (
    <Wrapper>
      <h3>Something went wrong</h3>
    </Wrapper>
  )
}
export default Error