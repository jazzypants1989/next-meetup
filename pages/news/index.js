import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/dingdong">I like cheese</Link>
        </li>
        <li>
          <Link href="/news/cheese">I like cheese the most.</Link>
        </li>
      </ul>
    </Fragment>
  );
};
export default NewsPage;
