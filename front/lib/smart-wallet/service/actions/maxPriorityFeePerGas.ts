import { ENTRYPOINT_ADDRESS } from "@/constants";
import { SmartWalletClient } from "@/lib/smart-wallet/service/smart-wallet";
import { UserOperationAsHex } from "@/lib/smart-wallet/service/userOps";
import axios from "axios";

/*  */

export async function maxPriorityFeePerGas(
  client: SmartWalletClient
): Promise<bigint> {
  try {
    const response = await axios.post(client.transport.url, {
      jsonrpc: "2.0",
      method: "eth_maxPriorityFeePerGas",
      params: [],
      id: 1,
    });
    console.log("maxPriorityFeePerGas", response);

    return response.data.result;
  } catch (error) {
    console.error("Error fetching maxPriorityFeePerGas", error);
    throw error;
  }
}
