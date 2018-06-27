import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import PropTypes from 'prop-types';

export default class Tip extends Component {
    static propTypes = {
        tip: PropTypes.object.isRequired,
        onClose: PropTypes.func.isRequired,
    };
    state = {
        opacity: new Animated.Value(1),
    };
    handleClose = () => {
        Animated.timing(this.opacity, {
            toValue: 0,
            duration: 150,
        }).start(this.props.onClose);
    };

    render() {
        const { tip } = this.props;

        return (
            <Animated.View
                style={[
                    styles.tip,
                    {
                        opacity: this.opacity,
                    },
                ]}
            >
                <View style={styles.tipContainer}>
                    <Text style={styles.text}>{tip.text}</Text>
                    <TouchableOpacity onPress={this.handleClose}>
                        <Text style={styles.closeButton}>×</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    tip: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    tipContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    text: {
        flex: 1,
        paddingLeft: 10,
        paddingVertical: 10,
    },
    closeButton: {
        opacity: 0.5,
        fontSize: 28,
        fontWeight: '300',
        paddingHorizontal: 10,
        paddingBottom: 3,
    },
});
