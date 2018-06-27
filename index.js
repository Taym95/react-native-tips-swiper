import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';

export default class reactNativeTipsSwiper extends Component {
    static propTypes = {
        tips: PropTypes.array.isRequired,
    };
    state = {
        tips: this.props.tips,
    };
   

    render() {
        const { tips } = this.props;

        return (
            <Swiper showsPagination={false} style={styles.tips}>
                {tips.map((tip, index) => (
                    <Tip
                        key={tip.id}
                        tip={tip}
                        onClose={() => {
                            tips.splice(index, 1);
                        }}
                    />
                ))}
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    tips: {
        width: '100%',
        height: 60,
    },
});
