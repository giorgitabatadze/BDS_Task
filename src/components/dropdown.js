import React, {useState} from "react";
import {StyleSheet} from "react-native";
import {Dropdown} from "react-native-element-dropdown";

const DropdownComponent = ({
                               placeholder,
                               style,
                               data,
                               labelField,
                               valueField,
                               value1,
                               onChange,
                           }) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <Dropdown
            style={style}
            data={data}
            search
            maxHeight={300}
            labelField={labelField}
            valueField={valueField}
            placeholder={placeholder}
            searchPlaceholder="Search..."
            value={value1}
            dropdownPosition="bottom"
            onFocus={() => setIsFocus(true)}
            onChange={onChange}

        />
    );
};

export default DropdownComponent;
