

export const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

export const constructPayloadForSubmitLead = (data = {}, others) => {
    const { partnerId, clientNumber, leadSource } = others
    const { customerInfo = {}, sellingLocation = {}, buyingLocation = {}, operationType, customQuestion = [] } = data || {};
    const utm = JSON.parse(localStorage.getItem('utm'));
    

    return {
        trace_id: uuidv4(),
        partner: partnerId,
        appType: "microsite",
        processor: 'cartus',
        data: {
            firstName: customerInfo.firstName,
            lastName: customerInfo.lastName,
            ohAddrLine1: (operationType == 'SELL' || operationType == 'BUYSELL') ? sellingLocation.address : '',
            ohAddrLine2: (operationType == 'SELL' || operationType == 'BUYSELL') ? sellingLocation?.sellApt : '',
            ohCityName: (operationType == 'SELL' || operationType == 'BUYSELL') ? sellingLocation?.city : '',
            ohStateAbbr: (operationType == 'SELL' || operationType == 'BUYSELL') ? sellingLocation?.state : '',
            ohPostalCod: (operationType == 'SELL' || operationType == 'BUYSELL') ? sellingLocation.zip : '',
            ohPhone: customerInfo.phonetype === 'Home' ? customerInfo.phoneNumber : '',
            uCanText: customerInfo.phonetype === 'Mobile' ? customerInfo.textYou ? true : false : false,
            email: customerInfo.email,
            ocPhone: customerInfo.phonetype === 'Mobile' ? customerInfo.phoneNumber : '',
            interestBuyHome: operationType == 'BUY' || operationType == 'BUYSELL',
            buyLocation: (operationType == 'BUY' || operationType == 'BUYSELL') ? `${buyingLocation.city}, ${buyingLocation.state}` : '',
            interestSellHome: operationType == 'SELL' || operationType == 'BUYSELL',
            sellLocation: (operationType == 'SELL' || operationType == 'BUYSELL') ? `${sellingLocation.city ? sellingLocation.city + ", " : ""}${sellingLocation.state}` : '',
            questions: (customQuestion.length > 0) ? customQuestion : [],
            memberNbr: "",
            metadata: {
                CliNbr: clientNumber,
                LeadSource: leadSource
            },
            ...(utm || {})


        }
    }
}