import React from 'react'
import { translate } from 'react-i18next'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const RentInstrumentPage = ({ t }) => (
  <PageTemplate title={t('rent-instrument.title')}>
    <Markdown>{t('rent-instrument.text')}</Markdown>
  </PageTemplate>
)

export default translate('translations')(RentInstrumentPage)
