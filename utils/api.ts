import { google } from 'googleapis'
import credential from '@/constants/googleCredential'

const jwtClient = new google.auth.JWT(
  credential.client_email,
  null,
  credential.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
)

jwtClient.authorize(function (err) {
  if (err) {
    console.log(err)
    return
  } else {
    console.log('Successfully connected!')
  }
})

export const getWhyNextReasons = async () => {
  try {
    const scopes = ['https://www.googleapis.com/auth/spreadsheets']
    const jwt = new google.auth.JWT(
      credential.client_email,
      null,
      credential.private_key,
      scopes
    )

    const sheets = google.sheets({ version: 'v4', auth: jwt })
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Sheet1',
    })

    console.log(response)
  } catch (err) {
    console.log(err)
  }

  return []
}
