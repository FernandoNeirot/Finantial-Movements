import { type ReactElement } from "react"
import Select from "react-select"
import { isStringEmpty } from "./domain/functions"

const SelectCustom = ({
  options = [],
  isMulti = false,  
  isDisabled,
  errors,
  label = "",
  value,
  iconLeft = false,
  iconRight = false,
  placeHolder = "",
  validError = true,
  defaultValue,
  setValue
}:
any): ReactElement => {
  const id = Date.now().toString();
  return (
    <div className="w-full">
      {!isStringEmpty(label) && <div>{label}</div>}
      <div className="w-full">
        <Select
        id={id}
          aria-sort="ascending"
          defaultValue={defaultValue}
          noOptionsMessage={() => "No hay opciones"}
          loadingMessage={() => "Cargando"}
          maxMenuHeight={140}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              cursor: state.isDisabled ? "no-drop" : "pointer",
              border: !isStringEmpty(errors)
                ? "1px solid red !important"
                : state.isFocused
                ? "1px solid #bebebe !important"
                : " 1px solid #c0c0c0",
              boxShadow: state.isFocused ? " 0px 0px 0px 1px #bebebe  !important" : "none !important",
              minHeight: "42px",
              background: state.isDisabled ? "#c0c0c0" : "",
              // fontFamily: `${GLOBAL_STYLES.FONT.FAMILY}`,
              fontSize: "0.8rem !important",
              borderRadius: iconRight ? "5px 0px 0px 5px" : iconLeft ? "0px 5px 5px 0px" : "5px"
            }),
            noOptionsMessage: (baseStyle) => ({
              ...baseStyle,
              textAlign: "left"
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              color: `#585858`,
              top: "35px"
            }),
            container: (baseStyles,) => ({
              ...baseStyles,
              width: "100%",
              fontSize: "0.8rem !important",
              // fontFamily: `${GLOBAL_STYLES.FONT.FAMILY}`,
              borderShadow: "none !important"
            })
          }}
          isDisabled={isDisabled}
          isMulti={isMulti}
          // isClearable
          options={options}
          value={value ?? null}
          onChange={setValue}
          placeholder={placeHolder}
          className="react-select__menu"
          classNamePrefix="react-select"
        />
      </div>
      {validError && <div>{errors}</div>}
    </div>
  )
}

export default SelectCustom