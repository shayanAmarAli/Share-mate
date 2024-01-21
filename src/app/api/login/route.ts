// https://graph.facebook.com/oauth/access_token
//   ?client_id={your-app-id}
//   &client_secret={your-app-secret}
//   &grant_type=client_credentials"
import fetch from "node-fetch";

import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

type ResponseData = {
  message: string;
};

const APP_ID = "300766279082840";
const APP_SECRET = "06c845c03c289a82c05028c6f8e22682";

export async function GET(req: NextRequest) {
  //   const appAccessToken: any = await getAppAccessToken();
  const paramsToken: any = req.nextUrl.searchParams.get("token");
  const response = await fetch(
    `https://graph.facebook.com/oauth/access_token?client_id=${APP_ID}&client_secret=${APP_SECRET}&grant_type=client_credentials`
  );
  const data: any = await response.json();
  if (!response.ok) {
    throw new Error("EROR FOUND");
  }

  console.log(data.access_token);

  const responseInputToken = await fetch(
    `https://graph.facebook.com/v13.0/debug_token?input_token=${paramsToken}&access_token=${data.access_token}`
  );
  const dataInputToken: any = await responseInputToken.json();
  //   return dataInputToken.data.scopes;
  //   console.log("Response from the server is----++++", paramsToken);
  //   const scopes = await getDebugToken(appAccessToken, paramsToken);
  //   console.log("The scope send from this api is--->", scopes);
  //   "https://graph.facebook.com/USER-ID?access_token=ACCESS-TOKEN"

  return NextResponse.json({
    scopes: data.access_token,
    inputToken: dataInputToken.data.scopes,
  });
}

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { userAccessToken, message } = req.body;

  try {
    const response = await axios.post(
      `https://graph.facebook.com/v12.0/me/feed?message=${message}&access_token=${userAccessToken}`
    );

    res.status(200).json({ success: true, data: response.data });
  } catch (error: any) {
    res
      .status(500)
      .json({ success: false, error: error.response?.data || error.message });
  }
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
