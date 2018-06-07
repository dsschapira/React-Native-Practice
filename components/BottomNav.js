import React, { Component } from 'react';
import {View, StyleSheet, TabBarIOS} from 'react-native';

//Creates spacing at the top to maintain indicator icons.
export default class BottomNav extends Component{
    render(){
        return(
            <TabBarIOS>
                <TabBarIOS.Item
                    icon={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAFMN540AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQVJREFUeNpiYCAA/jMQBAABhBX14zWICV0WIIBwaRcg2j1MDJQCgAAiGq3H5Zb1aHwB6tv9n3L/AgQQPqQAtWI/sRoEoBqweXU+FGP1BCkJC+QaB4pSJROpwUu1pEWRZoAAohnaD/WrAimaBNACqB9LkscKcCUEfIkHHh0CRORGlNLGgZT0S0ZqpEF+pInm/wNm8yDXTBEACDBKUAMU0wUUAPF7ID4PxAZQfB4qVkBtywKgBt9HL6nRgANUzXuoHrIApYYQ61gwgAXbfyoHWwHUTFj0YBSMBRS2wIgptQpo0fQjycwBy8gslLocDTDSymJ8hpMURQMW1CPPYkY6ZSeSEh5NAQCGcDrFxiWO6gAAAABJRU5ErkJggg=='}} 
                    />
                <TabBarIOS.Item
                    icon={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAFMN540AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYKAcAAQQBmIE4v/IfCZ0FRgCAAHECKX/4zKSiZClTBQ7GyCAiEL/cdCDUydWABBAVA8LYvkMozaTCAACaOAQIw4/MRLBpyzgmEb9POrnwQsAAmwU4Srm/lNRfmBTCAsJvqam/Ggcj8bxaByPxvEQBABNrkDwlZ7J9QAAAABJRU5ErkJggg=='}} 
                    />
            </TabBarIOS>
        );
    }
}

const styles = StyleSheet.create({
});