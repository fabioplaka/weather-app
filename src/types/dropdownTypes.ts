export type DropdownTypes = {
    label: string | null | undefined,
    value: string | null | undefined,
    id: string,
    disabled: boolean | undefined,
    title: string | undefined,
}

export type SelectedCountryType = {
    selectedCountry: DropdownTypes
  }