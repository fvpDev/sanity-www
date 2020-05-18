import React from "react";
import { SitemapItem, EnumChangefreq } from "sitemap";
import { SitemapStream, streamToPromise } from "sitemap";
import { NextApiRequest, NextApiResponse, NextPageContext } from "next";

interface RouteItem extends Omit<SitemapItem, "img" | "links" | "video"> {
  title: string; // used as string title
  sitemap: boolean; // used to filter routes when construction sitemap
  navigation: boolean; // used to filter routes when construction navigation
  img?: SitemapItem["img"]; // transform type to optional
  links?: SitemapItem["links"]; // transform type to optional
  video?: SitemapItem["video"]; // transform type to optional
}

export const routes: RouteItem[] = [
  {
    title: "Landing",
    sitemap: true,
    navigation: false,
    url: "/",
    changefreq: EnumChangefreq.YEARLY,
  },
];

interface PageContext extends NextPageContext {
  req: NextApiRequest;
  res: NextApiResponse;
}

class Sitemap extends React.Component {
  static async getInitialProps({ req, res }: PageContext) {
    const hostname = "https://" + req.headers.host;
    res.setHeader("Content-Type", "text/xml");
    const smStream = new SitemapStream({ hostname });
    for (const route of routes) smStream.write(route);
    smStream.end();
    const sitemap = await streamToPromise(smStream).then((sm) => sm.toString());
    res.write(sitemap);
    res.end();
  }
}

export default Sitemap;
