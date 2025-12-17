import React from 'react';
import { FilterBar } from './components/FilterBar';
import { Table } from './components/Table';
import { Pagination } from './components/Pagination';
import { MOCK_QUOTE_DATA } from './constants';
import { SystemNotice } from './components/SystemNotice';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f0f2f5] p-4 font-sans">
      <div className="max-w-[1920px] mx-auto">
        
        {/* System Notice */}
        <SystemNotice />
        
        {/* Filter Section - Now inline */}
        <FilterBar />

        {/* Action Buttons Row */}
        <div className="flex items-center gap-2 mb-3">
            <button className="bg-[#1890FF] hover:bg-[#096DD9] text-white px-4 py-1.5 rounded text-xs transition-colors shadow-sm">
                新增
            </button>
            <button className="bg-[#52C41A] hover:bg-[#389E0D] text-white px-4 py-1.5 rounded text-xs transition-colors shadow-sm">
                上传excel
            </button>
            <button className="bg-[#FF4D4F] hover:bg-[#D9363E] text-white px-4 py-1.5 rounded text-xs transition-colors shadow-sm">
                批量删除
            </button>
            <button className="bg-[#FA8C16] hover:bg-[#D46B08] text-white px-4 py-1.5 rounded text-xs transition-colors shadow-sm">
                条件删除
            </button>
            <button className="bg-[#1890FF] hover:bg-[#096DD9] text-white px-4 py-1.5 rounded text-xs transition-colors shadow-sm">
                添加报价图片
            </button>
            <button className="bg-[#1890FF] hover:bg-[#096DD9] text-white px-4 py-1.5 rounded text-xs transition-colors shadow-sm">
                导出
            </button>
        </div>

        {/* Main Table */}
        <div className="space-y-4">
          <Table 
            data={MOCK_QUOTE_DATA} 
          />
          {/* Pagination */}
          <Pagination total={48} pageSize={10} current={1} />
        </div>

      </div>
    </div>
  );
};

export default App;