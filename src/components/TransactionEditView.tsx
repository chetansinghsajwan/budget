import { TextInputCard } from '@components/TextInputCard'
import { TextInput } from '@components/TextInput'
import { DatetimeInputCard } from '@components/DatetimeInputCard'
import { SelectListCard } from '@components/SelectListCard'
import { CostInputCard } from '@components/CostInputCard'
import { Transaction } from '@client/Transaction'
import { useClient } from '@client/ClientProvider'
import { Button } from '@components/Button'
import { PageTemplate } from '@templates/Page'
import constants from '@constants'

export interface TransactionEditViewProps {
  transaction: Transaction
  onChange?: (changes: Partial<Transaction>) => void
  availableCategories?: string[]
  availableTags?: string[]
  onBack?: () => void
  onSave?: () => void
  onDelete?: () => void
}

export function TransactionEditView(props: TransactionEditViewProps) {
  const { transaction } = props

  const client = useClient()
  const availableCategories =
    props.availableCategories ?? client.getCategories()
  const availableTags = props.availableTags ?? client.getTags()

  const selectedCategoryIndex = availableCategories.findIndex(
    category => category === transaction.category,
  )
  const selectedCategoryIndices =
    selectedCategoryIndex === -1 ? [] : [selectedCategoryIndex]

  const selectedTagIndices = getTagsIndices(transaction.tags)

  function getTagsIndices(_: string[]): number[] {
    return []
  }

  function onTitleChange(value: string) {
    props.onChange?.({
      title: value,
    })
  }

  function onAmountChange(value: string) {
    props.onChange?.({
      amount: parseInt(value),
    })
  }

  function onDatetimeChange(value: Date) {
    props.onChange?.({
      datetime: value,
    })
  }

  function onCategoryChange(index: number) {
    const category = availableCategories[index]

    props.onChange?.({
      category: category,
    })
  }

  function onTagSelect(index: number) {
    const newTag = availableTags[index]
    const newTags = [...transaction.tags, newTag].sort()

    props.onChange?.({
      tags: newTags,
    })
  }

  function onTagUnselect(index: number) {
    const tagToRemove = availableTags[index]
    const newTags = transaction.tags.filter(
      selectedTag => selectedTag === tagToRemove,
    )

    props.onChange?.({
      tags: newTags,
    })
  }

  function onNotesChange(value: string) {
    props.onChange?.({
      notes: value,
    })
  }

  function onNotesClear() {
    props.onChange?.({
      notes: '',
    })
  }

  return (
    <PageTemplate
      title={transaction.title}
      header={
        <div
          id='title'
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: 250,
          }}
        >
          <TextInput
            value={transaction.title}
            onChange={onTitleChange}
            placeholder='Title'
            category='h2'
            align='center'
          />
        </div>
      }
      beforeTitleButtons={[
        props.onBack && <Button icon='back' variant='light' size='sm' onPress={props.onBack} />,
      ]}
      afterTitleButtons={[
        props.onDelete && <Button icon='delete' variant='light' size='sm' onPress={props.onDelete} />,
        props.onSave && <Button icon='correct' variant='light' size='sm' onPress={props.onSave} />,
      ]}
    >
      <div
        id='content'
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: constants.transactionElementGap,
        }}
      >
        <CostInputCard
          key='amount'
          variant='long-medium'
          inputProps={{
            value: transaction.amount.toString(),
            onChange: onAmountChange,
          }}
        />
        <DatetimeInputCard
          key='datetime'
          variant='long-medium'
          inputProps={{
            value: transaction.datetime,
            onChange: onDatetimeChange,
          }}
        />
        <SelectListCard
          key='category'
          variant='long-medium'
          leftIcon='category'
          listProps={{
            items: availableCategories,
            selected: selectedCategoryIndices,
            onSelect: onCategoryChange,
          }}
        />
        <SelectListCard
          key='tags'
          variant='long-medium'
          leftIcon='tag'
          listProps={{
            items: availableTags,
            selected: selectedTagIndices,
            onSelect: onTagSelect,
            onUnselect: onTagUnselect,
          }}
        />
        <TextInputCard
          key='notes'
          variant='long-flex'
          onClear={onNotesClear}
          inputProps={{
            value: transaction.notes,
            onChange: onNotesChange,
            category: 'text',
          }}
        />
      </div>
    </PageTemplate>
  )
}
