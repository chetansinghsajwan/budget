import { PageTemplate } from '@templates/Page'
import { TextInput } from '@components/TextInput'
import { useEffect, useState } from 'react'
import { Button } from './Button'
import { useNavigate } from 'react-router'

export interface SearchViewProps {
  initSearchText?: string
}

export function SearchView(props: SearchViewProps) {
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState(props.initSearchText)
  const [searchResult, setSearchResult] = useState<any>()

  useEffect(updateSearchResults, [searchText])

  function updateSearchResults() {
    // ask client for search results
  }

  function onBack() {
    navigate(-1)
  }

  function onSort() {}
  function onFilter() {}
  function onOptions() {}

  return (
    <PageTemplate
      title='Search'
      beforeTitleButtons={[
        <Button icon='back' onPress={onBack} variant='light' size='sm' />,
      ]}
      afterTitleButtons={[
        <Button icon='sort' onPress={onSort} variant='light' size='sm' />,
        <Button icon='filter' onPress={onFilter} variant='light' size='sm' />,
        <Button icon='options' onPress={onOptions} variant='light' size='sm' />,
      ]}
    >
      <TextInput value={searchText} onChange={setSearchText} />
    </PageTemplate>
  )
}
