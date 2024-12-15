// import { getTeamChatDetails } from "./queries/commonQueries";

export const API_BASE_URL = 'http://192.168.18.9:8000';

export const API_TEMPLATE_URL = API_BASE_URL + '/api/';

export const API_ENDPOINTS = {
  COMMON: {
    login: API_TEMPLATE_URL + 'public/login',
    GetActionCatagories: API_TEMPLATE_URL + 'public/categories', //with dept id parameter
    GetActionSubacategories: API_TEMPLATE_URL + 'public/subcategories', //inside query parameter, need dept id and cat id
    GetActionDepartments: API_TEMPLATE_URL + 'public/departments',
    GetAllTeamChats: API_TEMPLATE_URL + 'get-all-teams-chats',
    SendMessageToTeam: API_TEMPLATE_URL + 'send-message-to-team',
    GetTeamChatDetails: API_TEMPLATE_URL + 'get-team-chat-details', //chat id as param
    GetAllChatsWithTeam: API_TEMPLATE_URL + 'get-all-chats-with-team',
  },
  AGENT: {
    GetAllChatsWithCustomer:
      API_TEMPLATE_URL + 'agent/get-all-chats-with-customer',
    GetCustomerChatDetails: API_TEMPLATE_URL + 'agent/get-chat', //pass chat id as param
    SendMessageToCustomer: API_TEMPLATE_URL + 'agent/send-to-customer',
    ChangeChatStatus: API_TEMPLATE_URL + 'agent/change-chat-status', // body {chatId, setStatus}
    CreateCryptoTransaction:
      API_TEMPLATE_URL + 'agent/create-crypto-transaction',
    CreateCardTransaction: API_TEMPLATE_URL + 'agent/create-card-transaction',
  },
};
