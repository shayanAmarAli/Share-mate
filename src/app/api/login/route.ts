// https://graph.facebook.com/oauth/access_token
//   ?client_id={your-app-id}
//   &client_secret={your-app-secret}
//   &grant_type=client_credentials"
import fetch from "node-fetch";

import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

const APP_ID = "300766279082840";
const APP_SECRET = "06c845c03c289a82c05028c6f8e22682";

export async function GET(req: NextRequest) {
  const appAccessToken: any = await getAppAccessToken();
  const paramsToken: any = req.nextUrl.searchParams.get("token");
  const scopes = await getDebugToken(appAccessToken, paramsToken);
  console.log("The scope send from this api is--->", scopes);
//   "https://graph.facebook.com/USER-ID?access_token=ACCESS-TOKEN"

  return NextResponse.json({ scopes: scopes });
}

const getAppAccessToken = async () => {
  const response = await fetch(
    `https://graph.facebook.com/oauth/access_token?client_id=${APP_ID}&client_secret=${APP_SECRET}&grant_type=client_credentials`
  );
};

const getDebugToken = async (appAccessToken: string, token: string) => {
  // const response = await fetch(`/debug_token?input_token=${token}&access_token=${(appAccessToken}`)
  const response = await fetch(
    `https://graph.facebook.com/v13.0/debug_token?input_token=${token}&access_token=${appAccessToken}`
  );
  const data: any = await response.json();
  return data.data.scopes;
};
