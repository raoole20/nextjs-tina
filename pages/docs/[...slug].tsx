import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "@/tina/__generated__/client";

const BlogPage = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h1 className="text-3xl m-8 text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {data.post?.title}
          </h1>
          <ContentSection content={data.post?.body}></ContentSection>
        </div>
        <div className="bg-green-100 text-center">Custom footer</div>
      </div>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.slug.join("/")}.md` };

  try {
    const res = await client.queries.post(variables);
    query = res.query;
    data = res.data;
    variables = res.variables;
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables: variables,
      data: data,
      query: query,
      //myOtherProp: 'some-other-data',
    },
  };
};

export const getStaticPaths = async () => {
  const postsListData = await client.queries.postConnection();

  return {
    paths: postsListData.data.postConnection.edges?.map((post) => ({
      params: {
        slug: post?.node?._sys.breadcrumbs,
      },
    })),
    fallback: false,
  };
};

export default BlogPage;

const PageSection = (props) => {
  return (
    <>
      <h2>{props.heading}</h2>
      <p>{props.content}</p>
    </>
  );
};

const components = {
  PageSection: PageSection,
};

const ContentSection = ({ content }) => {
  return (
    <div className="relative py-16 bg-white overflow-hidden text-black">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <TinaMarkdown components={components} content={content} />
        </div>
      </div>
    </div>
  );
};
