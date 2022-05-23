
function ADD_CEP (state, payload) {
  state.cepList = [payload, ...state.cepList];
}

function REMOVE_ADDRESS (state, payload) {
  state.addressList = payload;

  if (payload.length) {
    localStorage.setItem('addressList', JSON.stringify(payload));
  } else {
    localStorage.removeItem('addressList');
  }
}

function ADD_ADDRESS (state, payload) {
  const newAddressList = [...payload, ...state.addressList];

  state.addressList = newAddressList;

  localStorage.setItem('addressList', JSON.stringify(newAddressList));

  state.cepList = [];
}

export default {
  ADD_CEP,
  ADD_ADDRESS,
  REMOVE_ADDRESS
};
