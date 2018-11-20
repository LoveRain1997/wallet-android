package com.mycelium.wallet.content

import com.mrd.bitlib.model.NetworkParameters
import com.mycelium.wallet.MbwManager
import com.mycelium.wallet.activity.StringHandlerActivity


class AddressAction : Action {
    override fun handle(handlerActivity: StringHandlerActivity, content: String): Boolean {
        val address = MbwManager.getInstance(handlerActivity).contentResolver.resovleAddress(content)
                ?: return false
        handlerActivity.finishOk(address)
        return true
    }

    override fun canHandle(network: NetworkParameters, content: String): Boolean {
        return true
    }
}