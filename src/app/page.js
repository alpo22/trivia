import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("./AppWrapper"), {
  ssr: false,
});

function Page() {
  return <DynamicComponentWithNoSSR />;
}

Page.displayName = "Page";

export default Page;
