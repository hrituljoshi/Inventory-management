import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConfigProvider } from 'antd';
import App from './App.tsx';
import { persistor, store } from './redux/store.ts';
import './index.css';
import { Toaster } from 'sonner';

const antdTheme = {
  token: {
    colorPrimary: '#3B82F6', 
    colorSuccess: '#10B981', 
    colorWarning: '#F59E0B', 
    colorError: '#EF4444',   
    colorInfo: '#3B82F6',   
    colorTextBase: '#1F2937', 
    colorBgBase: '#F3F4F6',  
    fontFamily: "'Inter', 'Nunito Sans', sans-serif",
    borderRadius: 6,
    
    colorBgContainer: '#FFFFFF', 
    colorBorder: '#D1D5DB',      
    colorBorderSecondary: '#E5E7EB', 
  },
  components: {
    Button: {
      
    },
    Card: {
      colorBgContainer: '#FFFFFF', 
      paddingLG: 24, 
    },
    Modal: {
      colorBgElevated: '#FFFFFF', 
    },
    Table: {
      colorBgContainer: '#FFFFFF', 
      headerBg: '#F9FAFB',       
      borderColor: '#E5E7EB',     
    },
    Layout: { 
        headerBg: '#FFFFFF', 
        siderBg: '#FFFFFF', 
    },
    Input: {
      colorBgContainer: '#FFFFFF', 
    },
    Select: {
      colorBgContainer: '#FFFFFF',
    }
    
  },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider theme={antdTheme}>
          <App />
          <Toaster
            duration={2000}
            toastOptions={{
              style: {
                
                background: '#1F2937', 
                color: '#FFFFFF',      
                fontWeight: 500,       
                padding: '1rem',
                borderRadius: '6px', 
              },
              
            }}
          />
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
