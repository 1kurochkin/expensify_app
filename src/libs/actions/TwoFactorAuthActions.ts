import Onyx from 'react-native-onyx';
import Navigation from '@libs/Navigation/Navigation';
import ONYXKEYS from '@src/ONYXKEYS';
import type {Route} from '@src/ROUTES';

/**
 * Clear 2FA data if the flow is interrupted without finishing
 */
function clearTwoFactorAuthData() {
    Onyx.merge(ONYXKEYS.ACCOUNT, {recoveryCodes: null, twoFactorAuthSecretKey: null, codesAreCopied: false});
}

function setCodesAreCopied() {
    Onyx.merge(ONYXKEYS.ACCOUNT, {codesAreCopied: true});
}

function quitAndNavigateBack(backTo?: Route, shouldEnforceFallback = false) {
    clearTwoFactorAuthData();
    Navigation.goBack(backTo, shouldEnforceFallback);
}

export {clearTwoFactorAuthData, quitAndNavigateBack, setCodesAreCopied};
