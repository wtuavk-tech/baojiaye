import React from 'react';
import { QuoteEntry } from '../types';

interface TableProps {
  data: QuoteEntry[];
}

export const Table: React.FC<TableProps> = ({ data }) => {
    return (
      <div className="bg-white rounded-sm shadow-sm border border-gray-200 min-h-[500px] flex flex-col">
        <div className="overflow-x-auto flex-1 pb-4 w-full">
          <table className="min-w-full divide-y divide-gray-200 text-xs text-gray-600">
            <thead className="bg-[#f7f8fa]">
              <tr>
                <th className="px-4 py-3 w-10 text-center border-r border-gray-100">
                    <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100 w-16">序号</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">城市</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">服务项目</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">服务时间</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">价格类型</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">公司对外报价</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">师傅结算底价</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">跳钱价/成单底价</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">建议师傅分成比例</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100 min-w-[300px]">报价内容</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">报价图片</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">备注</th>
                <th className="px-4 py-3 text-center font-medium whitespace-nowrap w-32">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.length > 0 ? (
                data.map((row, index) => (
                  <tr key={row.id} className={`${index % 2 !== 0 ? 'bg-[#e6f7ff]' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                    <td className="px-4 py-3 text-center border-r border-gray-100">
                        <input type="checkbox" className="rounded border-gray-300" />
                    </td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.id}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.city}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.serviceItem}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.serviceTime}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.priceType}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.companyQuote}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.settlementPrice}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.jumpPrice}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.splitRatio}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-normal break-words max-w-[300px] text-gray-500">{row.content}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">
                        {row.hasImage && <span className="text-[#1890FF] cursor-pointer hover:underline">查看图片</span>}
                    </td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.remark}</td>
                    <td className="px-4 py-3 text-center whitespace-nowrap">
                        <div className="flex items-center justify-center gap-2">
                          <button className="text-[#1890FF] hover:text-[#096DD9] text-xs">修改</button>
                          <button className="text-[#1890FF] hover:text-[#096DD9] text-xs">调价记录</button>
                          <button className="text-[#F5222D] hover:text-[#CF1322] text-xs">删除</button>
                        </div>
                    </td>
                  </tr>
                ))
              ) : (
                  <tr>
                      <td colSpan={14} className="h-96 text-center">
                          <div className="flex flex-col items-center justify-center h-full text-gray-400">
                              <span>暂无数据</span>
                          </div>
                      </td>
                  </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
};