import React, { useState, useMemo } from "react";
import { Text, View, Image, TouchableOpacity, } from "react-native";
import { PaymentStyles } from '../../styles';
import { SF } from "../../utils";
import { VectorIcon } from "../../components";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const PaymentListData = (props) => {
    const { t } = useTranslation();
    const { item } = props;
    const { Colors } = useTheme();
    const PaymentStyle = useMemo(() => PaymentStyles(Colors), [Colors]);
    const [show, setShow] = useState(null);
    const toggleHandler = (id) => {
        (id === show) ? setShow(null) : setShow(id)
    };
    return (
        <TouchableOpacity onPress={() => toggleHandler(item.id)}>
            <View>
                <View style={PaymentStyle.SetFlexRowArrowLeftThree}>
                    <View style={PaymentStyle.FlexRowCreditCard}>
                        <View style={PaymentStyle.IconSetBorderWidth}>
                            <Image source={item.image} resizeMode='center' style={PaymentStyle.SetbgImage} />
                        </View>
                        <View style={PaymentStyle.SetTextWidth}>
                            <Text style={PaymentStyle.CreditCardText}>{t(item.smalltext)}</Text>
                            <Text style={PaymentStyle.YouNeedsText}>{t(item.paymentparegraph)}</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => toggleHandler(item.id)}>
                            {show === item.id ? <VectorIcon icon="AntDesign" name='up' size={SF(21)} /> : <VectorIcon icon="AntDesign" name='down' size={SF(21)} />}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {show === item.id ? <View>
                <View style={PaymentStyle.SetParegraphViewStyle}>
                    <Text style={PaymentStyle.ParegraphTextStyleset}>{t("Super_is_India")}</Text>
                </View>
            </View> : null}
        </TouchableOpacity>
    );
}
export default PaymentListData;